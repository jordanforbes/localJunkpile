import tkinter as tk
import json
from tkinter import filedialog
from PIL import Image, ImageTk



def add_json_data():
    # Get data from the input fields
    new_name = name_entry.get()
    new_email = email_entry.get()
    # pid = number_entry.get()

    # Load the existing JSON file
    with open('testdata.json', 'r') as file:
        data = json.load(file)

    # Create a new entry in the JSON data dictionary
    new_entry = {
        "pid": new_pid,
        "title": new_title,
        "category": new_category,
        "caption": new_caption,
        "description": new_description,
        "repo": new_repo,
        "url": new_url,
        "medium": new_entry,
        "images": new_image

    }

    # Append the new entry to the existing data
    data.append(new_entry)

    # Write the updated data back to the JSON file
    with open('testdata.json', 'w') as file:
        json.dump(data, file, indent=4)

    # Clear the input fields
    name_entry.delete(0, tk.END)
    email_entry.delete(0, tk.END)

    # Update the display of keys/values
    update_display(data)

def update_display(data):
    # Clear the current display
    display.delete(1.0, tk.END)

    # Display the updated JSON data
    display.insert(tk.END, json.dumps(data, indent=4))

# Create the main window
root = tk.Tk()
root.title("Add and Display JSON Data")

# Create labels and entry widgets for Name and Email
pid_label = tk.Label(root, text="pid:")
pid_label.pack()

pid_entry = tk.Entry(root)
pid_entry.pack()

title_label = tk.Label(root, text="Title:")
title_label.pack()

title_entry = tk.Entry(root)
title_entry.pack()

caption_label = tk.Label(root, text="Caption:")
caption_label.pack()

caption_entry = tk.Entry(root)
caption_entry.pack()

# Create a button to add JSON data
add_button = tk.Button(root, text="Add JSON Data", command=add_json_data)
add_button.pack()

# Create a text widget to display JSON data
display = tk.Text(root, height=10, width=40)
display.pack()

# Start the main GUI loop
root.mainloop()
