def alpha_seq(s):
    letters = sorted(s.lower())
    result = []
    for ch in letters:
        n = ord(ch) - 96   
        seq = ch.upper() + ch.lower() * (n - 1)
        result.append(seq)
    return ",".join(result)
