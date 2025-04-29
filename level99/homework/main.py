
#<> exercise N1
#// Find Count of Most Frequent Item in an Array


def most_frequent_item_count(collection):
    if not collection:
        return 0
    #/ ყველაზე დიდი სიხშირე
    highest_frequency = 0
    for num in collection:
        #/ ახლანდელი რიცხვის სიხშირე
        count = 0
        #// ყოველი num-ისთვის გადაუყვება მთლიან კოლექციას
        for i in collection:
            #// თუ ეს რიცხვი უდრის კოლექციის სხვა რიცხვებს 
            if i == num:
                #// დაუმატებს 1ს
                count += 1
        #* თუ ახლანდელი რიცხვის სიხშირე მეტია ძველზე        
        if count > highest_frequency:
            #* ძველ სიხშირეს შეცვლის ახლით
            highest_frequency = count
    return highest_frequency 
            
        
 
#<> exercise N2
#// share price
def share_price(invested, changes):
    for i in changes:
        invested += i / 100 * invested
    #/ დააბრუნებს ინვესტირებულ რიცხვს ასეულის სიზუსტით (.2f)
    return f"{invested:.2f}"

#<> exercise N3
#// You're a square!

import math
def is_square(n):
    if n < 0:
        return False
    #/ აბრუნებს ამოღებულ ფესვს floating point-ის გარეშე
    root = math.isqrt(n) 
    #| ვამოწმებთ მიღებულის თავის თავზე ნამრავლი თუ არის შემოტანილი რიცხვი
    return root * root == n

#<> exercise N4
#// Descending Order

def descending_order(num):
    return int(''.join(sorted(str(num), reverse=True)))

#// sorted(str(num) დააბრუნებს ზრდის მიხედვით დალაგებულ მასივს
#// reverse = true  შეატრიალებს ე.ი დაალაგებს კლების მიხედვით
#// join მასივის ელემენტებს შეართებს სტრინგად



#<> exrcise N5
#// Count "XO"

def xo(s):
    x_count = 0
    o_count = 0
    string = s.lower()
    for i in string:
        for j in string:
            if i == j and i == "x":
                x_count +=1
            elif i ==j and i =="o":
                o_count +=1
    return o_count == x_count