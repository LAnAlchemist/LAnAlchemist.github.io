#!/usr/bin/env python3
"""
Script to download team member photos from Google Drive.
Note: The Google Drive files need to be publicly accessible or you need to be authenticated.

To use:
1. Make sure the Google Drive files are set to "Anyone with the link can view"
2. Run: python3 download_team_photos.py
"""

import os
import sys

# Try to use gdown if available
try:
    import gdown
    
    # File IDs from Google Drive
    files = {
        'linna_an.jpg': '16pIramx0mDwPm3J9ZkrvlfktuT318mN5',
        'wenbo_ning.jpg': '166Z-7jPMZY0O5uMl6cD924FJmuhV8u_-',
        'yanapat_janthana.jpg': '1d4Dq2QQAtMETny4z0nbNrXbvWxPM2I-F',
        'hayden_stegall.jpg': '1Xv8qgzuwdld1PQvlXwIcwRHqQrDySgs0',
        'audrey_zheng.jpg': '1g3IFTz3UYJh3I6uj0NpkR7J7Df8o-Gyn'
    }
    
    figures_dir = 'figures'
    os.makedirs(figures_dir, exist_ok=True)
    
    print("Downloading team photos...")
    for filename, file_id in files.items():
        filepath = os.path.join(figures_dir, filename)
        url = f'https://drive.google.com/uc?id={file_id}'
        print(f"Downloading {filename}...")
        try:
            gdown.download(url, filepath, quiet=False)
            if os.path.exists(filepath):
                print(f"✓ Successfully downloaded {filename}")
            else:
                print(f"✗ Failed to download {filename}")
        except Exception as e:
            print(f"✗ Error downloading {filename}: {e}")
            print(f"  You may need to manually download from: {url}")
    
    print("\nDone! Check the figures/ directory for the downloaded images.")
    
except ImportError:
    print("gdown is not installed. Install it with: pip install gdown")
    print("\nAlternatively, you can manually download the images:")
    print("\n1. Linna An: https://drive.google.com/uc?id=16pIramx0mDwPm3J9ZkrvlfktuT318mN5")
    print("2. Wenbo Ning: https://drive.google.com/uc?id=166Z-7jPMZY0O5uMl6cD924FJmuhV8u_-")
    print("3. Yanapat Janthana: https://drive.google.com/uc?id=1d4Dq2QQAtMETny4z0nbNrXbvWxPM2I-F")
    print("4. Hayden Stegall: https://drive.google.com/uc?id=1Xv8qgzuwdld1PQvlXwIcwRHqQrDySgs0")
    print("5. Audrey Zheng: https://drive.google.com/uc?id=1g3IFTz3UYJh3I6uj0NpkR7J7Df8o-Gyn")
    print("\nSave them in the figures/ directory with the names:")
    print("  - linna_an.jpg")
    print("  - wenbo_ning.jpg")
    print("  - yanapat_janthana.jpg")
    print("  - hayden_stegall.jpg")
    print("  - audrey_zheng.jpg")
    sys.exit(1)

