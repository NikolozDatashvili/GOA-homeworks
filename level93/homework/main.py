
#<> exrcise N1
#// Greeting user
user_input = input("Please enter your name: ")
func = lambda x: f"Hello {x}"
print(func(user_input))


#<> exrcise N2
#// Doubling numbers
my_list = [12,43,5,1,55,64]
my_func = lambda x: x * 2
result =list( map(my_func, my_list))
print(result)

#<> exrcise N3
#// multipes of 5 
func1 = lambda x: x % 5 ==0
result1 = list(filter(func1, my_list))
print(result1)

#<>exercise N4
setn = {"Goa", "Novatori", "Stem", 123, True, 1, False, 0}
#/ 0 და 1 არ გამოვა რადგან true და 1, false და 0 ტოლი მნიშვნელობებია
