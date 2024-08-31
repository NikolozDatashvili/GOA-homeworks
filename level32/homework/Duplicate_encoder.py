def duplicate_encode(word):
    word = word.lower()
    str = ""
    
    for char in word:
        if word.count(char) > 1:
            str += ")"
        else:
            str += "("
    return str