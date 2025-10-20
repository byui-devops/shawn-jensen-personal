import unittest

# Simple example function (replace with a real one if available)
def multiply(a, b):
    return a * b

class TestMultiply(unittest.TestCase):
    def test_multiply_two_numbers(self):
        result = multiply(2, 3)
        self.assertEqual(result, 6)  # ✅ simple-test pattern

if __name__ == "__main__":
    unittest.main()
