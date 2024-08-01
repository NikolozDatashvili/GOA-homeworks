from turtle import *

# we want to draw a house
# step #1  Square
speed(7)


width (8)
color("red")

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door
forward(77)

left(90)
color("blue")
begin_fill()
forward(120)

right(90)
forward(45)
right(90)
forward(120)
end_fill()
# end of the door

#start of the roof

penup ()
goto(200, 200)
pendown()
 
color("purple")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)


right(150)
end_fill()
# end of the roof

penup()

# end of the roof

#start of the first window

goto(20, 135)
pendown()

width(5)
forward(40)

right(90)
forward(40)

right(90)
forward(40)

right(90)
forward(40)



#drawing cross

penup()

goto(40, 135)
pendown()
right(90)
forward(40)
right(90)
forward(20)
right(90)
forward(20)
right(90)
forward(40)


#end of the first window
penup()
goto(180, 135)
pendown()

width(5)
forward(40)

right(90)
forward(40)

right(90)
forward(40)

right(90)
forward(40)

penup()

goto(180, 155)
pendown()
right(90)
forward(40)
right(90)
forward(20)
right(90)
forward(20)
right(90)
forward(40)

penup()
goto(0,0)

exitonclick()