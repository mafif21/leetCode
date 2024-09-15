func lengthOfLastWord(s string) int {
    re := regexp.MustCompile(`\s+`)
	wordTrim := re.ReplaceAllString(s, " ")
	wordTrim = strings.TrimSpace(wordTrim)

	wSplit := strings.Split(wordTrim, " ")
	return len(wSplit[len(wSplit)-1])
}