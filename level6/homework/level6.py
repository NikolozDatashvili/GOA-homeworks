
# # <> Exercise # 1
# name = input("please enter your name: ") 
# # <> defined name variable so user can input their name

# greeting = input(print("Hi " + name + " have a great day")) 
# # <> deifined greeting so user sees greeting message with their name

# greeting()                                             
# # <> called greeting function 

# <> Exercise # 2

# mum_age = 48
# aunt_age = 45
# uncle_age = 33

# present = mum_age, aunt_age, uncle_age 
# # <> defined present ages of my family members 

# print("mum is", present[0], "\n" "aunt is", present[1], "\n" "uncle is",  present[2]) 
# # <> printed their present ages

# future = mum_age + 20, aunt_age + 20, uncle_age + 20
# # <> defined ages of family members after 20 years

# print("mum will be", future[0], "\n" "aunt will be", future[1], "\n" "uncle will be", future[2])
# # <> printed their ages in 20 years

# <> exercise # 3 
# <> user information program

# def valid_name():
#     while True:
#         name = input("Please enter your name: ")  
#         if name and name[0].isupper():
#             print(f"Your name is, {name}!")
#             break
#         else:
#             print("Invalid input, name should start with a capital letter.")

# valid_name()


# def valid_surname():
#     while True:
#         surname = input("Enter your surname: ")
#         if surname and surname[0].isupper():
#             print(f"Your surname is, {surname}!")
#             break
#         else:
#             print("Invalid input, surname should start with a capital letter.")

# valid_surname()
def valid_age():
    while True:
        user_input = input("Enter your age: ")
        try:
            age = int(user_input)
            if age < 0:
                print("Invalid input, age cannot be negative.")
            else:
                print(f"Your age is {age}.")
                break
        except ValueError:
            print("Invalid input, please enter a valid integer for age.")

valid_age()

# def valid_gmail():
#     while True:
#         gmail = input("Enter your gmail: ")
#         if "gmail.com" in gmail:
#             print(F"Your gmail is, {gmail}!")
#             break
#         else: 
#             print("Gmail is not valid")
            
# valid_gmail()


address = input("Enter your address: ")






