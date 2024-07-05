from forex_python.converter import CurrencyRates

def convert_currency(amount, from_currency, to_currency):
    c = CurrencyRates()
    try:
        converted_amount = c.convert(from_currency, to_currency, amount)
        print(f"{amount} {from_currency} is equal to {converted_amount:.2f} {to_currency}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    amount = float(input("Enter amount: "))
    from_currency = input("Enter from currency (e.g., USD, EUR, GBP): ").upper()
    to_currency = input("Enter to currency (e.g., USD, EUR, GBP): ").upper()
    convert_currency(amount, from_currency, to_currency)
