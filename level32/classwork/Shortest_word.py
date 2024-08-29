def find_short(s):
    words = s.split()
    shortest = len(words[0])
    for word in words[1:]:
        word_length = len(word)
        if word_length < shortest:
            shortest = word_length
            
    return shortest
