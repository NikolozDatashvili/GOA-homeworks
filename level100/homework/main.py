
#<> exercise N1
#// String ends with?
def solution(text, ending):
    text_index = len(text) - len(ending)

    for i in range(len(ending)):
        if text[text_index + i] != ending[i]:
            return False
    
    return True

#<> exercise N2
#// Even or Odd - Which is Greater?
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
    

#<> exercise N3
#// Elevator Distance

def elevator_distance(array):
    distance = 0
    for i in range(1, len(array)):
        #// manually checking if num < 0
        diff = array[i] - array[i - 1]
        if diff < 0:
            distance += -diff
        else:
            distance += diff
    return distance
#/ using abs()
def elevator_distance(array):
    distance = 0
    for i in range(1, len(array)):
        distance += abs(array[i] - array[i - 1])
    return distance


#<> exercise N4
#// Sliding Puzzle Verification

def is_solved(board):
    expected = 0
    #/ გადავუყვეთ რიგებს  
    for row in board:
        #// გადავუყვეთ ციფრებს
        for tile in row:
            if tile != expected:
                return False
            expected += 1 #// გადავიდეთ შემდეგ რიცხვზე 
    return True
            


#<> exercise N5 
#// Battle of the characters (Easy)

def battle(x, y):
    power_x = 0
    for i in range(len(x)):
        power_x += ord(x[i])-64
    power_y = 0
    for j in range(len(y)):
        power_y += ord(y[j])-64
    if power_x > power_y:
        return x
    elif power_x < power_y:
        return y
    else:
        return "Tie!"