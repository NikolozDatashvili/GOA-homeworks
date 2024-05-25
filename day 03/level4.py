from turtle import * 

speed(0)
width(15)
color("gray")
begin_fill()

# <> setting up screen

screensize(10000,10000)
import turtle
drawing_area = turtle.Screen()
drawing_area.bgcolor("cyan")

# <> pen starting position setup
def st_point():
   penup()
   goto(0,0)   # ! defined starting point to return there easily
   pendown()

# <> setting up basic codes

def around():
   right(180)
def l_green():
   color("light green")

def brown():
   color("brown")

def black():
   color("black")

def cyan():
   color("cyan")

def red():
   color("red")

def gray():
   color("gray")

def white():
   color("white")

def gold():
   color("yellow")

# <> start of tower


def tower():
    for i in range(2):   
      
      forward(300)
      left(90)
      forward(500)
      left(90)

begin_fill()
tower()
   
end_fill()

# ! end of the base

left(90)
forward(505)

# <> start of the roof

def roof():
   brown()
   begin_fill()
   right(25)        # ! defined roof for another use 
   forward(357)
   right(130)
   forward(355)
   right(115)
   forward(300)
   end_fill()


roof()



# ! end of the roof

# <> drawing window 

def window():
   around()
   forward(100)
   begin_fill()
   cyan()
   left(90)
   forward(170)
   right(90)
   forward(100)
   right(90)
   forward(170)
   end_fill()
   brown()
   left(90)
   forward(62)
   around()
   forward(230)


window()

around()

forward(100)

penup()
goto(0,500)
pendown()
forward(302)
# ! end of the window 

# <> drawing queen

width(6)
around()
forward(190)
right(90)
penup()
goto(125,535)
pendown()

# <> drawing legs

red()
forward(10)
around()
right(20)
forward(33)
around()
forward(33)
right(140)
forward(33)
around()
forward(33)
right(20)
forward(50)

# <> drawing head


right(90)
pendown()
circle(15)
right(90)

# <> drawing hands

forward(7)
right(30)
forward(35)

around()

forward(35)
right(120)
forward(35)
left(60)

penup()
goto(180,535)
pendown()

# <> drawing king
gold()
width(6)
around()
right(90)

# <> drawing legs

forward(15)
around()
right(20)
forward(38)
around()
forward(38)
right(140)
forward(38)
around()
forward(38)
right(20)
forward(58)

# <> drawing head


right(90)
circle(17)

# <> drawing hands
right(90)
forward(8)
right(30)
forward(40)

around()

forward(40)
right(120)
forward(40)
left(60)

# <> drawing flag
black()
penup()
goto(151,835)
pendown()
left(90)
width(6)
forward(100)
width(4)
begin_fill()
for i in range(2):   
      
      forward(270)
      left(90)
      forward(550)
      left(90)

forward(75)
left(90)
end_fill()

# <> Writing goa on flag

penup()
goto(-290,1150)
pendown()
around()
#  drawing G

l_green()
width(10)
circle(-90,-200)


right(100)
forward(50)

left(90)
forward(50)

# <> drawing O

right(10)
around()
penup()
goto(-155, 980)
pendown()
circle(80)

# <> drawing A

penup()
goto(10,1080)
pendown()
forward(80)
right(65)
forward(95)
backward(175)

right(60)
forward(175)

# <> drawing bridge, bridge floor and bridge fences 
# <> gate floor
penup()
goto(300,500)
pendown()
left(125)
width(15)
brown()
forward(1000)
around()
# <> gate fences
width(7)

def fence():
   right(90)
   forward(65)
   left(90)
   forward(90)
   left(90)
   forward(65)
   right(90)

for i in range(11):
   fence()

penup()
goto(1300,500)
pendown()

gray()
begin_fill()
for i in range(2):   
      
      forward(-300)
      left(90)
      forward(500)
      left(90)

end_fill()



brown()
forward(700)
brown()
penup()
goto(1300,500)
pendown()
red()
around()


# <> drawing roof and window 
width(15)
left(90)
roof()
window()

# <> drawing and defining Guard
def guard():
   black()
   width(8)
   around()
   right(90)

   # <> drawing legs

   forward(15)
   around()
   right(20)
   forward(48)
   around()
   forward(48)
   right(140)
   forward(48)
   around()
   forward(48)
   right(20)
   forward(68)

   # <> drawing head

   black()
   right(90)
   circle(18)

   # <> drawing hands
   right(90)
   forward(10)
   right(30)
   forward(45)

   around()

   forward(45)
   right(120)
   forward(45)
   left(60)

penup()
goto(1450, 539)
pendown()
around()
guard()

# <> drawing second flag
black()
penup()
goto(1451,829)
pendown()
left(90)
width(6)
forward(100)
width(4)
begin_fill()
for i in range(2):   
      
      forward(270)
      right(90)
      forward(550)
      right(90)

forward(75)
left(90)
end_fill()

# <> Writing goa on flag

penup()
goto(1561,1150)
pendown()
around()
# <> drawing G

l_green()
width(10)
circle(-90,-200)


right(100)
forward(50)

left(90)
forward(50)

# <> drawing O

right(10)
around()
penup()
goto(1696, 980)
pendown()
circle(80)

# <> drawing A

penup()
goto(1861,1080)
pendown()
forward(80)
right(65)
forward(95)
backward(175)

right(60)
forward(175)

# <> drawing gate 
width(15)
penup()
goto(1295,4)
pendown()
begin_fill()
left(25)
begin_fill()
gray()
right(80)
forward(217)


brown()

right(90)
forward(300)
circle(120,100)
right(10)
forward(300)

circle(120,100)
right(10)
forward(282)

right(90)
gray()
forward(219)

right(90)
forward(488)
right(90)
forward(1000)
right(90)
forward(480)

end_fill()


exitonclick()