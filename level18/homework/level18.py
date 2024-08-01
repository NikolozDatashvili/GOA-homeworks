
# <> exercise #1

# my_info = {
#     "name": "nika",
#     "age": 17,
#     "city": "Tbilisi",
#     "school": "50th school"

# }

# print(f"my name is {my_info['name']} i am {my_info['age']} years old, i study in {my_info['school']} in {my_info['city']}")

# <> exercise #2

# subjects = {
#     "English" : 10,
#     "Math" : 10,
#     "History": 9,
#     "Physics": 8,
#     "Geography": 9

# }

# total_score = sum(subjects.values())
# num_subjects = len(subjects)
# average_score = total_score / num_subjects

# print(f"Average score: {average_score}")

# <> exercise #3

# sherlock_holmes = {
#     "Publish year": 1892,
#     "Doctor" : "John Watson",
#     "Author":"Arthur Conan Doyle"
# }

# print(f"Sherlock holmes is best book i have ever read which was published in {sherlock_holmes['Publish year']}.",
#       f"Sherlock has bestfriend dr. {sherlock_holmes['Doctor']} who helps the detective to solve misterious cases.", 
#       f"Author of this significant book is {sherlock_holmes['Author']}.  ")

# <> exercise #4

# Market dictionary with products and their prices
market = {
    "Apple": 1.00,
    "Banana": 0.50,
    "Orange": 0.75,
    "Milk": 1.50,
    "Bread": 2.00
}

# Initialize an empty cart dictionary
cart = {}

# Display available products
print("Available products:")
for product in market:
    print(product)

# Get user input for the cart
while True:
    product = input("Enter the product you want to add to your cart (or type 'done' to finish): ").strip()
    
    if product.lower() == 'done':
        break
    
    if product in market:
        quantity = input(f"How many {product}s do you want to add? ").strip()
        if quantity.isdigit():
            quantity = int(quantity)
            cart[product] = cart.get(product, 0) + quantity
    else:
        print("Product not found.")

# Print the contents of the cart
print("\nYour cart:")
for product, quantity in cart.items():
    print(f"{product}: {quantity} item(s)")
