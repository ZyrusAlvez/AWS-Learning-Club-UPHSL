from PIL import Image
from pathlib import Path
import os

# Get the target directory
directory = Path(os.getcwd()) / "public" / "members"
print("Scanning directory:", directory)

# Loop through all .png files (case-insensitive)
for file in directory.iterdir():
    if file.suffix.lower() == ".png":
        print("Converting:", file.name)
        img = Image.open(file).convert("RGBA")
        img.save(file.with_suffix(".webp"), "webp")
        
        # Delete the original PNG after conversion
        file.unlink()
        print("Deleted original:", file.name)

print("All PNGs converted to WEBP and originals deleted!")
