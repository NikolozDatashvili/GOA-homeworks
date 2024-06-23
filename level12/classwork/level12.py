
# <> exercise 1
# i = 0  

# while i < 20:
#     i = i + 1
#     print(i)


# <> exercise 2 

# i = 0

# while i < 10:
#     i = i + 2
#     print(i)

# <> exercise 3

# i = 1

# sum = 0
# while i <= 10:
#     sum = sum + i
#     i = i + 1  

# print(sum)

# <> exercise 4 

# password = "Nika123"  # | correct password

# guess = "" # * defined guess

# while guess != password:  
#     guess = input("Enter the password: ") # // while user doesnt input correct password 
# // this message will be displayed
#     if guess!= password:  
# \\ if users input is not right these 
# \\ messages will be displayyed
#         print("Password is invalid")
#         print("Try again")
# // if users input password is right this message will be displayed
#     else:
#         print("You have succesfully authorized")


# <> exercise 5 

# i = 9 # <> defined highest number that "i" could be

# while i >= 1:  # // while i equels to 1 or is greater than 1            
#     print(i)   
#     i = i - 2 # // program will print odd numbers from 1 to 9


# <> exercise 6 (BONUS)

# | first method 
# legal = 18  # * defined age restriction 

# while True:                                    # ! used "while true" so as long as
#     user_age = int(input("How old are you?> "))# ! user doesn't put number greater than
#     if user_age >= legal:                      # ! 18 it will display: How old are you?> 
#         print("You are logged in")
#         break     # // used break so whenever user puts number greater than 18 
#     else:         # //program will display: You are logged in and than finish
#         print("You are not legal")
#         print("Try again")

# | second method 

# legal = 18 # * defined age restriction 
# user_age = int(input("How old are you?> ")) # * defined user_age before while loop

# while user_age < legal:       # <> while legal is greater than user_age it will 
#     print("You are not legal")# <> make user write numbers before
#     print("Try again")        # <> user writes number greater than "legal"
#     user_age = int(input("How old are you?> "))

# print("You are logged in")   # // after user inputs num greater than 18 this message 
                               # // will display and program will finish


# <> exercise 7
# num = int(input("Enter numbers from 1-7: ")) # <> user input number 

# if num == 1:
#     print("Monday") 
# elif num == 2:
#     print("Tuesday")
# elif num == 3:
#     print("Wednesday")
# elif num == 4:
#     print("Thursday")
# elif num == 5:
#     print("Friday")
# elif num == 6:
#     print("Saturday")
# elif num == 7:
#     print("Sunday")
# else:
#     print("Wrong input")


# <> exercise 8

# i = 0

# while i <= 10:
#     i += 1   # <> for printing 1-10
#     if i % 2 == 0:  # <> checking num is odd or even
#         print( i, "is even number") # <> printing even numbers
#     else:
#         print(i,"is odd number") # <> printing odd numbers



# <> exrcise 9
# user_age = int(input("Enter your age: "))

# if user_age > 5 and user_age < 12:
#     print("You are a child")
# elif user_age > 12 and user_age <18:
#     print("You are a teenager")
# elif user_age > 18:
#     print("You are an adult") 

# <> exrcise 10

# age = int(input("Enter your age: "))

# legal = 18

# if age >= legal:
#     print("You can participate in elections :)")
# else:
#     print("You aren't old enough to participate in elections :(")
