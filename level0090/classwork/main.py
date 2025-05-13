def is_comfortable(word):
    
    left_hand = "qwertasdfgzxcvb"
    right_hand = "yuiophjklnm"
    #<> შევამოწმოთ რომელი ხელია გამოყენებული პირველი character-ისთვის
    
    current_hand = "left" if word[0] in left_hand else "right"
    
    #// გადავუყვეთ დანარჩენ charact-ერებს შემოტანილ სიტყვაში
    for i in range(1, len(word)):
        #/ თუ ახლანდელი character-ი მარცხენა ხელით არის დაწერილი
        if word[i] in left_hand:
            #// შევამოწმოთ იყო თუ არა წინა ქარაქთერი დაბეჭდილი მარცხენა ხელით
            if current_hand != "left":
                current_hand = "left"  #// შევცვალოთ ხელი მარცხენათი
            else:
                return False  #| თუ ერთი ხელით არის დაწერილი 2 მომდევნო char-ი 
        #\ თუ ახლანდელი character-ი მარჯვენა ხელით არის დაწერილი
        elif word[i] in right_hand:
            #* შევამოწმოთ იყო თუ არა წინა ქარაქთერი დაბეჭდილი მარჯვენა ხელით
            if current_hand != "right":
                current_hand = "right"  #// შევცვალოთ ხელი მარჯვენათი
            else:
                return False   #| თუ ერთი ხელით არის დაწერილი 2 მომდევნო char-ი 
    
   
    return True
