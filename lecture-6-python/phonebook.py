import csv

with open("phonebook.csv", "a") as file:

    name = input("Name: ")
    number = input("Number: ")

    writer = csv.DictWriter(file, fieldnames=["name", "number"])
    writer.writerow({"name": name, "number": number})


# dict() or {}
# people = {
    # "Carter": "+1-654-498-8241",
    # "David": "+1-469-828-4968"
# } 
# 
# name = input("Name: ")
# if name in people:
    # number = people[name]
    # print(f"Number: {number}")
