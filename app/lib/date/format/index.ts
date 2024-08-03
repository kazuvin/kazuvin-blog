/**
 * Date オブジェクトを任意のフォーマットの文字列に変換する関数
 *
 * @param date - 変換対象の日付。
 * @param format - 変換フォーマット。yyyy → 年、MM → 月、dd → 日 で変換される。(ex. yyyy-MM-dd)
 */
export function format(date: Date, format: string) {
  if (
    !format.includes("yyyy") &&
    !format.includes("MM") &&
    !format.includes("dd")
  ) {
    throw new Error("不正な日付フォーマットが指定されています: " + format);
  }

  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return format.replace("yyyy", year).replace("MM", month).replace("dd", day);
}
