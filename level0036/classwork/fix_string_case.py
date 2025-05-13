def solve(s):
    count_l = 0
    count_u = 0
    for char in s:
        if char.islower():
            count_l += 1
        else:
            count_u += 1
    if count_l >= count_u:
        return s.lower()
    else:
        return s.upper()