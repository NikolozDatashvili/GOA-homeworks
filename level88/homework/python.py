
#<> exercise N1
def solution(text, ending):

    #/ ვიპოვი ინდექსი საიდანაც უნდა მოხდეს ending თან შემოწმება
    text_index = len(text) - len(ending)

    #/ გადავუყვები ending-ს
    for i in range(len(ending)):
        if text[text_index + i] != ending[i]: #// შევადარებ text-ის შესაბამისი ინდექსის მქონე ასოს
            return False  #/ თუ რომელიმე ასო არ ემთხვევა 
    
    return True

print(solution("hello", "o"))
print()
print(solution("fire", "ire"))
print()
print(solution("find", "op"))



#<> exercise N2

def even_or_odd(s):
    evens = 0 
    odds = 0 

    for digit in s:  
        num = int(digit)  

        if num % 2 == 0: 
            evens += num 
        else:
            odds += num 

    if evens > odds:
        return "Even is greater than Odd"
    elif odds > evens:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"


print(even_or_odd("12"))
print(even_or_odd("984"))
print(even_or_odd("27"))


#<> exercise N3

def cat_mouse(x):
    if len(x) >= 6:
        return "Escaped!"
    else:
        return "Caught!"
    

#<> exercise N4

def even_numbers(arr, n):
    evens = []
    for num in arr:
        if num % 2 == 0:
            evens.append(num)
    
    
    result = []
    for i in range(len(evens) - n, len(evens)):
        result.append(evens[i])
    
    return result


print(even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) 
print(even_numbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) 