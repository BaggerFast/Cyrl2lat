const TranslitMap: { [key: string]: string } = {
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'e',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'i',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'kh',
  'ц': 'ts',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'shch',
  'ы': 'y',
  'ъ': 'ie',
  'э': 'e',
  'ю': 'iu',
  'я': 'ia',
  ' ': ' ',
}

function transliterate(str: string): string {
  let result = ''
  for (const c of str) {
    const lowerChar = c.toLowerCase()
    const translitChar = TranslitMap[lowerChar]
    if (translitChar === undefined) {
      throw new Error('Invalid transliterate character')
    }
    result +=
      c === lowerChar
        ? translitChar
        : translitChar.charAt(0).toUpperCase() + translitChar.slice(1)
  }
  return result
}

export { transliterate }
