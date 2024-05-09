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
            SeedOrders(20); // Seed 20 đơn hàng
            _context.SaveChanges();
            SeedRatings(50); // Seed 50 đánh giá
            _context.SaveChanges();
            SeedFavoriteProducts(30); // Seed 30 sản phẩm yêu thích
            _context.SaveChanges();
            SeedComments(50); // Seed 50 bình luận
            _context.SaveChanges();
            SeedCoupons(10); // Seed 10 coupon
            _context.SaveChanges();
            SeedCouponProducts(5); // Seed 5 sản phẩm cho mỗi coupon
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
        private void SeedOrders(int count)
        {
            if (!_context.Orders.Any())
            {
                var users = _context.Users.ToList();
                for (int i = 0; i < count; i++)
                {
                    var order = new Order
                    {
                        UserId = users[_random.Next(users.Count)].UserId,
                        OrderDate = DateTime.Now.AddDays(-_random.Next(1, 30)), // Lấy ngày ngẫu nhiên trong khoảng 30 ngày trước đến ngày hiện tại
                        TotalAmount = _random.Next(10000, 1000000), // Tổng số tiền ngẫu nhiên từ 10,000 đến 1,000,000
                        OrderStatus = _random.Next(0, 2) == 0 ? "Pending" : "Completed", // Trạng thái đơn hàng ngẫu nhiên
                        Note = GenerateRandomString(20) // Ghi chú ngẫu nhiên
                    };
                    _context.Orders.Add(order);

                    // Thêm chi tiết đơn hàng
                    SeedOrderDetails(order);
                }
            }
        }

        private void SeedOrderDetails(Order order)
        {
            var products = _context.Products.ToList();
            for (int i = 0; i < _random.Next(1, 5); i++) // Mỗi đơn hàng có từ 1 đến 5 sản phẩm
            {
                var product = products[_random.Next(products.Count)];
                var orderDetail = new OrderDetail
                {
                    OrderId = order.OrderId,
                    ProductId = product.ProductId,
                    Quantity = _random.Next(1, 10), // Số lượng sản phẩm từ 1 đến 10
                    UnitPrice = product.ProductPrice // Giá của sản phẩm
                };
                _context.OrderDetails.Add(orderDetail);
            }
        }
        private void SeedRatings(int count)
        {
            if (!_context.Ratings.Any())
            {
                var users = _context.Users.ToList();
                var products = _context.Products.ToList();
                for (int i = 0; i < count; i++)
                {
                    var rating = new Rating
                    {
                        UserId = users[_random.Next(users.Count)].UserId,
                        ProductId = products[_random.Next(products.Count)].ProductId,
                        RatingValue = _random.Next(1, 6), // Đánh giá từ 1 đến 5
                        RatingDate = DateTime.Now.AddDays(-_random.Next(1, 30)) // Ngày đánh giá ngẫu nhiên trong khoảng 30 ngày trước đến ngày hiện tại
                    };
                    _context.Ratings.Add(rating);
                }
            }
        }

        private void SeedFavoriteProducts(int count)
        {
            if (!_context.FavoriteProducts.Any())
            {
                var users = _context.Users.ToList();
                var products = _context.Products.ToList();
                for (int i = 0; i < count; i++)
                {
                    var favoriteProduct = new FavoriteProduct
                    {
                        UserId = users[_random.Next(users.Count)].UserId,
                        ProductId = products[_random.Next(products.Count)].ProductId,
                        DateAdded = DateTime.Now.AddDays(-_random.Next(1, 30)) // Ngày thêm vào danh sách yêu thích ngẫu nhiên trong khoảng 30 ngày trước đến ngày hiện tại
                    };
                    _context.FavoriteProducts.Add(favoriteProduct);
                }
            }
        }

        private void SeedComments(int count)
        {
            if (!_context.Comments.Any())
            {
                var users = _context.Users.ToList();
                var products = _context.Products.ToList();
                for (int i = 0; i < count; i++)
                {
                    var comment = new Comment
                    {
                        UserId = users[_random.Next(users.Count)].UserId,
                        ProductId = products[_random.Next(products.Count)].ProductId,
                        CommentText = GenerateRandomString(50), // Nội dung bình luận ngẫu nhiên
                        CommentDate = DateTime.Now.AddDays(-_random.Next(1, 30)) // Ngày bình luận ngẫu nhiên trong khoảng 30 ngày trước đến ngày hiện tại
                    };
                    _context.Comments.Add(comment);
                }
            }
        }
        private void SeedCoupons(int count)
        {
            if (!_context.Coupons.Any())
            {
                for (int i = 0; i < count; i++)
                {
                    var coupon = new Coupon
                    {
                        CouponCode = GenerateRandomString(8), // Mã coupon ngẫu nhiên
                        DiscountType = _random.Next(2) == 0 ? "Percentage" : "Fixed", // Loại giảm giá: Theo phần trăm hoặc cố định
                        DiscountValue = _random.Next(10, 50), // Giá trị giảm giá ngẫu nhiên từ 10 đến 50 (phần trăm hoặc giá tiền tùy thuộc vào loại)
                        ExpiryDate = DateTime.Now.AddDays(_random.Next(30, 180)), // Ngày hết hạn ngẫu nhiên trong khoảng 30 đến 180 ngày sau ngày hiện tại
                        ActiveStatus = _random.Next(2) == 0 // Tình trạng hoạt động: true hoặc false
                    };
                    _context.Coupons.Add(coupon);
                }
            }
        }

        private void SeedCouponProducts(int count)
        {
            if (!_context.CouponProducts.Any())
            {
                var coupons = _context.Coupons.ToList();
                var products = _context.Products.ToList();
                foreach (var coupon in coupons)
                {
                    for (int i = 0; i < count; i++)
                    {
                        var couponProduct = new CouponProduct
                        {
                            CouponId = coupon.CouponId,
                            ProductId = products[_random.Next(products.Count)].ProductId
                        };
                        _context.CouponProducts.Add(couponProduct);
                    }
                }
            }
        }
    }
}
    

