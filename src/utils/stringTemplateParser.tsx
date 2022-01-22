/** Replaces any variables inside NativeLanding.json from a template object.
 * Usage: stringTemplateParser('Hello my name is {{ name }}.', { name: 'Viren' });
 * Output: 'Hello my name is John'.
 * Remember to use same template literal as the one defined inside the template object.
 * Reference: https://stackoverflow.com/a/56920019
 * @param nativeAppText
 * @param templateObj
 * @return string
 */
const stringTemplateParser = (
  nativeAppText: string,
  templateObj: { [p: string]: string }
): string => {
  const templateMatcher = /{{\s?([^{}\s]*)\s?}}/g
  return nativeAppText.replace(templateMatcher, (_substring, value) => {
    value = templateObj[value]
    return value
  })
}

export default stringTemplateParser
