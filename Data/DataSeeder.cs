using Ecommerce_App.Models;

namespace Ecommerce_App.Data
{
    public class DataSeeder
    {
        private readonly AplicationDbContext _context;
        private readonly Random _random;

        public DataSeeder(AplicationDbContext context)
        {
            _context = context;
            _random = new Random();
        }

        public void SeedData()
        {
            SeedRoles();
            _context.SaveChanges();
            SeedUsers(100);
            _context.SaveChanges();
            SeedCategories();
            _context.SaveChanges();
            SeedProducts(50); // Seed 50 sản phẩm
            _context.SaveChanges();
        }

        private void SeedRoles()
        {
            if (!_context.Roles.Any())
            {
                _context.Roles.AddRange(
                    new Role { RoleName = "User" },
                    new Role { RoleName = "Blogger" },
                    new Role { RoleName = "Admin" }
                );

            }
        }

        private void SeedUsers(int count)
        {
            if (!_context.Users.Any())
            {
                for (int i = 0; i < count; i++)
                {
                    var user = new User
                    {
                        RoleId = _random.Next(1, (_context.Roles.Count() + 1)), // Chọn ngẫu nhiên một trong ba vai trò
                        Username = GenerateRandomString(8),
                        Email = GenerateRandomEmail(),
                        Password = GenerateRandomString(10),
                        DefaultAddress = GenerateRandomAddress(),
                        PhoneNumber = GenerateRandomPhoneNumber() // Cung cấp số điện thoại ngẫu nhiên
                    };
                    _context.Users.Add(user);
                }

            }
        }

        private Address GenerateRandomAddress()
        {
            return new Address
            {
                AddressLine1 = GenerateRandomString(12),
                AddressLine2 = "N/A", // Giá trị mặc định hoặc tùy chọn khác
                City = GenerateRandomString(6),
                State = GenerateRandomString(6),
                Country = "Vietnam"
            };
        }

        private string GenerateRandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[_random.Next(s.Length)]).ToArray());
        }

        private string GenerateRandomEmail()
        {
            // Danh sách các tên miền email phổ biến
            string[] emailDomains = { "example.com", "gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com" };

            // Chọn ngẫu nhiên một tên miền từ danh sách
            string randomDomain = emailDomains[_random.Next(emailDomains.Length)];

            // Tạo email ngẫu nhiên với tên người dùng và tên miền được chọn
            return $"{GenerateRandomString(8)}@{randomDomain}";
        }
        private string GenerateRandomPhoneNumber()
        {
            Random random = new Random();
            return "0" + random.Next(100000000, 999999999).ToString(); // Tạo số điện thoại ngẫu nhiên trong khoảng từ 100,000,000 đến 999,999,999
        }
        private void SeedCategories()
        {
            if (!_context.Categories.Any())
            {
                _context.Categories.AddRange(
                    new Category { CategoryName = "Flower" },
                    new Category { CategoryName = "Bag" },
                    new Category { CategoryName = "Lamp" }
                );
            }
        }

        private void SeedProducts(int count)
        {
            if (!_context.Products.Any())
            {
                var categories = _context.Categories.ToList();
                for (int i = 0; i < count; i++)
                {
                    {
                        var productNameIndex = _random.Next(1, 4); // Chọn một số ngẫu nhiên từ 1 đến 3
                        var productName = productNameIndex switch
                        {
                            1 => "Hoa",
                            2 => "Túi sách",
                            _ => "Đèn"
                        };

                        var productDescriptionIndex = _random.Next(1, 3); // Chọn một số ngẫu nhiên từ 1 đến 2
                        var productDescription = productDescriptionIndex switch
                        {
                            1 => "Thân thiện với môi trường",
                            _ => "Rất phù hợp với sự xinh đẹp của bạn"
                        };
                        var product = new Product
                        {


                            ProductName = productName,
                            ProductDescription = productDescription,
                            ProductPrice = _random.Next(50000, 200000), 
                            ProductQuantity = _random.Next(50, 100), 
                            ProductImageUrl = "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/418524171_122093818412187017_1499128247207467143_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f_Lb2bGxcvkQ7kNvgHVyxGE&_nc_ht=scontent.fdad1-2.fna&oh=00_AfA9Fivg5mARoCZRc7uTluL7cybKbyw4XupswQbilvcJcw&oe=66425624", // URL hình ảnh logo của nhóm mình , ví dụ tạm
                            CategoryId = categories[_random.Next(categories.Count)].CategoryId // Chọn ngẫu nhiên một danh mục từ danh sách các danh mục có sẵn
                        };
                        _context.Products.Add(product);
                    }
                }
            }
        }
    }
}
    

