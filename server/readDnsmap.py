#open text file in read mode
text_file = open("dnsmapOut.txt", "r")
 
#read whole file to a string
data = text_file.read()
 
#close file
text_file.close()
 
print(data);