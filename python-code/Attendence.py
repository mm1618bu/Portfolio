import pandas as pd
import os

# File name for storing attendance
attendance_file = 'attendance.csv'

# Initialize the attendance file if it doesn't exist
if not os.path.exists(attendance_file):
    df = pd.DataFrame(columns=['Name', 'Date', 'Status'])
    df.to_csv(attendance_file, index=False)

def mark_attendance(name, date, status):
    df = pd.read_csv(attendance_file)
    new_entry = pd.DataFrame({'Name': [name], 'Date': [date], 'Status': [status]})
    df = pd.concat([df, new_entry], ignore_index=True)
    df.to_csv(attendance_file, index=False)
    print(f"Attendance marked for {name} on {date} as {status}.")

def view_attendance():
    df = pd.read_csv(attendance_file)
    print(df)

def main():
    while True:
        print("\nAttendance Tracker")
        print("1. Mark Attendance")
        print("2. View Attendance")
        print("3. Exit")
        choice = input("Enter your choice: ")

        if choice == '1':
            name = input("Enter student's name: ")
            date = input("Enter date (YYYY-MM-DD): ")
            status = input("Enter status (Present/Absent): ")
            mark_attendance(name, date, status)
        elif choice == '2':
            view_attendance()
        elif choice == '3':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
