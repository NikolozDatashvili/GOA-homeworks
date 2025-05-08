
<<<<<<< HEAD
#<> exercise N1
#// String ends with?
=======

#<> exercise N1 
#//String ends with?
>>>>>>> d91ccbc3c7202a0b55d7afdeca58defaaaad6a65
def solution(text, ending):
    text_index = len(text) - len(ending)

    for i in range(len(ending)):
        if text[text_index + i] != ending[i]:
            return False
    
    return True

#<> exercise N2
<<<<<<< HEAD
#// Even or Odd - Which is Greater?
=======
#// even or odd - which is greater?
>>>>>>> d91ccbc3c7202a0b55d7afdeca58defaaaad6a65
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
<<<<<<< HEAD
    

#<> exercise N3
#// Elevator Distance

def elevator_distance(array):
    distance = 0
    for i in range(1, len(array)):
        #// manually checking if num < 0
=======
 
#<> exercise N3
#// Elevator Distance
#/ without abs()
def elevator_distance(array):
    distance = 0
    for i in range(1, len(array)):
>>>>>>> d91ccbc3c7202a0b55d7afdeca58defaaaad6a65
        diff = array[i] - array[i - 1]
        if diff < 0:
            distance += -diff
        else:
            distance += diff
    return distance
<<<<<<< HEAD
#/ using abs()
=======

#// Elevator Distance
#/ with abs()

>>>>>>> d91ccbc3c7202a0b55d7afdeca58defaaaad6a65
def elevator_distance(array):
    distance = 0
    for i in range(1, len(array)):
        distance += abs(array[i] - array[i - 1])
    return distance


#<> exercise N4
#// Sliding Puzzle Verification

def is_solved(board):
    expected = 0
<<<<<<< HEAD
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

=======
    for row in board:
        for tile in row:
            if tile != expected:
                return False
            expected += 1
    return True
#<> exercise N5
#// Battle of the characters (Easy)
>>>>>>> d91ccbc3c7202a0b55d7afdeca58defaaaad6a65
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