import fs from 'fs-extra'
import glob from 'glob'
import path from 'path'

import { fileLocaleNames } from './shared'

const sourceDir = path.resolve( __dirname, "../build-contents" )
const outputDir = path.resolve(
  __dirname,
  "../build-contents-on-other-platforms"
)

const localeMap = {
  cn: {
    prefix : ``,
    postfix: `  
    
**感谢你花时间阅读这篇文章。如果你喜欢这篇文章,欢迎点赞、收藏和分享，让更多的人看到这篇文章，这也是对我最大的鼓励和支持！**  
**同时欢迎阅读我的更多原创前端技术博客: [苏溪云的博客](https://terry-su.github.io/cn/)。**`,
    runCase: `点击运行案例`
  },
  en: {
    prefix : ``,
    postfix: ``,
    runCase: `Click to run case`
  }
}

const defaultLocaleTextsMap = localeMap[ "en" ]

buildContentsOnOtherPlatforms()
export default function buildContentsOnOtherPlatforms() {
  // # get all markdown contents from build-contents
  const markdownFiles = glob.sync( `${sourceDir}/**/*.md` ).filter( file => {
    const name = path.parse( file ).name
    return fileLocaleNames.includes( name )
  } )

  // # iterate every markdown to update its content for other platform
  markdownFiles.forEach( file => {
    const text = fs.readFileSync( file, { encoding: "utf8" } )
    const locale = path.parse( file ).name
    const transformedText = transform( text, locale )

    // # output transformed markdown content
    const relativePath = path.relative( sourceDir, file )
    const targetPath = path.resolve( outputDir, relativePath )
    fs.outputFileSync( targetPath, transformedText )
  } )
}

function transform( text: string, locale: string ) {
  let res
  const localeTextsMap = localeMap[ locale ]
  // # remove yaml text
  const yamlRegexpText = "^---[\\s\\S]*?---\\n"
  const yamlRegexp = new RegExp( yamlRegexpText, "m" )
  res = text.replace( yamlRegexp, "" )

  // # replace iframe
  const iframeRegexpText = `<iframe .*?src=('.*?'|".*?").*?></iframe>`
  const iframeGlobalRegexp = new RegExp( iframeRegexpText, "g" )
  const iframeRegexp = new RegExp( iframeRegexpText )
  res = res.replace( iframeGlobalRegexp, match => {
    const matched = match.match( iframeRegexp )
    if ( matched && matched[ 1 ] != null ) {
      const src = JSON.parse( matched[ 1 ] )
      const word =
        localeTextsMap != null && localeTextsMap.runCase != null ?
          localeTextsMap.runCase :
          defaultLocaleTextsMap.runCase
      return `[${word}](${src})`
    }
    return match
  } )

  // # add postfiex
  res = `${res}
${localeTextsMap.postfix}`

  return res
}