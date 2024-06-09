# user_age = int(input("Enter your age: "))

# is_legal = user_age > 18 and user_age <= 25

# print(is_legal)


# user_budget = float(int(input("Enter your budget: ")))

# fits_in_budget = user_budget > 50 or user_budget > 100


# print(fits_in_budget)

# for i in range(10):
#     print("Nika")
#     for i in range(1):
#         print("Goa is the best")


secret_number = int(input("Enter the number from 1 to 10: "))
tries = 3 
print("You have 3 tries")
for i in str(secret_number):
    if secret_number == 5:
        print("You have won")
    elif str(secret_number) != True:
        
        tries = tries - 1 
        print("You have lost you have " + str(tries) +  "more tries"  )
       
       