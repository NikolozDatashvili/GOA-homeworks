def solution(full_text, search_text):
    count = 0
    search_length = len(search_text)
    i = 0
    
    while i <= len(full_text) - search_length:
        
        if full_text[i:i + search_length] == search_text:
            count += 1
            i += search_length  
        else:
            i += 1  
    return count


print(solution("aa_bbb_cc_dd_bb_e_bb", "bb"))   
print(solution("aaabbbcccc", "bbb"))       