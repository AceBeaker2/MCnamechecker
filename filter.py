words = open("words.txt", "r")
letters = input("Letters:")
unfiltered = [(line.strip()).split() for line in words]

print(unfiltered)

words.close()

filtered_list=[]

for word in unfiltered:
	if len(word[0]) == int(letters):
		filtered_list.append(word[0])

print(filtered_list)

textfile = open("filtered.txt", "w")

for element in filtered_list:
    textfile.write(element + "\n")
textfile.close()
