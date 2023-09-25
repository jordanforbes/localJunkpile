import tkinter as tk
import json
from tkinter import filedialog
from PIL import Image, ImageTk
from update_entry import update_entry
import os

def create_gui():
  root = tk.Tk()
  root.title("Edit Entry")

  # Create labels and entry widgets for each field
  fields = ["pid", "title", "category", "caption", "description", "repo", "url", "medium", "images"]
  entry_widgets = {}

  for field in fields:
      label = tk.Label(root, text=field.capitalize() + ":")
      label.pack()

      entry = tk.Entry(root)
      entry.pack()

      entry_widgets[field] = entry

  display = tk.Text(root, height=10, width=40)
  # Create a button to update the entry
  update_button = tk.Button(root, text="Update Entry", command=lambda: update_entry(entry_widgets, display))
  update_button.pack()

  # Create a text widget to display the JSON entry
  display.pack()

  root.mainloop()

# Call the create_gui function to create and display the GUI
create_gui()
