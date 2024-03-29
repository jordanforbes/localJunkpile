import tkinter as tk
# from editor import
import json

def update_entry(entry_widgets, display):

    def update_display(entry_data, display):
        display.delete(1.0, tk.END)
        display.insert(tk.END, json.dumps(entry_data, indent=4))


    # Get data from the input fields
    new_pid = entry_widgets["pid"].get()
    new_title = entry_widgets["title"].get()
    new_category = entry_widgets["category"].get()
    new_caption = entry_widgets["caption"].get()
    new_description = entry_widgets["description"].get()
    new_repo = entry_widgets["repo"].get()
    new_url = entry_widgets["url"].get()
    new_medium = entry_widgets["medium"].get()
    new_image = entry_widgets["images"].get()

    #  load existing json file
    with open('testdata.json', 'r') as file:
        data = json.load(file)

    # Create the new_entry dictionary
    new_entry = {
        "pid": new_pid,
        "title": new_title,
        "category": new_category,
        "caption": new_caption,
        "description": new_description,
        "repo": new_repo,
        "url": new_url,
        "medium": new_medium,
        "images": new_image.split(",")  # Split the images input into a list
    }

    data.append(new_entry)

    with open('testdata.json', 'w') as file:
        json.dump(data, file, indent=4)

    # Update the JSON display with the new_entry
    update_display(new_entry, display)


# root = tk.Tk()
# root.title("Edit Entry")

# # Create labels and entry widgets for each field
# fields = ["pid", "title", "category", "caption", "description", "repo", "url", "medium", "images"]
# entry_widgets = {}

# for field in fields:
#     label = tk.Label(root, text=field.capitalize() + ":")
#     label.pack()

#     entry = tk.Entry(root)
#     entry.pack()

#     entry_widgets[field] = entry

# # Create a button to update the entry
# update_button = tk.Button(root, text="Update Entry", command=lambda: update_entry(entry_widgets))
# update_button.pack()

# # Create a text widget to display the JSON entry
# display = tk.Text(root, height=10, width=40)
# display.pack()

# root.mainloop()
