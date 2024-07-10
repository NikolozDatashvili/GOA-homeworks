
# fruits = ["Banana","Apple","Pineapple","Pear","Mango"] # <> created list of fruits  

# print(fruits[2:4]) # // printed 2 fruits indexed at (2-3) using slicing 

# print(fruits[-5:-1])


# countries = ["Georgia", "Spain", "Italy", "Namibia", "Zimbabwe", "Brazil"]

# europe = countries[:3]
# print(europe)


# cars = ["BMW","Mercedes","Lexus","Porsche","Ferrari","Ford"]


# print("BMW is on index:", cars.index("BMW"))
# print("Lexus is on index:", cars.index("Lexus"))
# print("Ford is on index:", cars.index("Ford"))

# numbers = [5,62,76,4,321,88,43,23]

# print(max(numbers))
# print(min(numbers))

# nums = [143,45,756,578,23]

# nums.append(numbers.pop(4))
# nums.append(numbers.pop(3))
# print(nums)

# print(numbers)
 
# <> exercise #6

# nums1 = [13,453,6,3,64,2,145]

# nums2 = [14,252,43,236,5,134,67]

# sub1 = max(nums1) - min(nums2)
# print("Subtraction of", max(nums1), "and", min(nums2), "equels to:", sub1)

# sub2 = max(nums2) - min(nums1)

# print("Subtraction of", max(nums2), "and", min(nums1), "equels to:", sub2)


# <> exercise #7 

# ints = [24,13,46,76,3,26]

# print(sum(ints[3:5]))
# print(sum(ints[1:5]))
# print(sum(ints[0:]))
# print(sum(ints[0:3]))


# list = [24,66,67,435,46,353,2,12]

# print(list[8:0:-1])

# list2 = [24,66,45,768,67,435,46,]

# print(list2[::-2])

# list3 = [676,84,3,8,56,32,5]
# print(list3)
# reversed_list = []

# for i in range(len(list3)-1,-1 ,-1):
#     reversed_list.append(list3[i])

# print(reversed_list)



name = "nika"

print(name[::-1])