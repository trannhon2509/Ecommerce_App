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
            SeedUsers(200);
            _context.SaveChanges();
            SeedCoupons(200);
            _context.SaveChanges();
            _SeedCategories();
            _context.SaveChanges();
            SeedProducts();
            _context.SaveChanges();
            SeedCouponProduct();
            _context.SaveChanges();
            SeedFavoriteProduct(200);
            _context.SaveChanges();
            SeedComment();
            _context.SaveChanges();
            SeedOrder(300);
            _context.SaveChanges();
            SeedOrderDetail();
            _context.SaveChanges();
            SeedRating();
            _context.SaveChanges();
        }

        private void _SeedCategories()
        {
            if (!_context.Categories.Any())
            {
                _context.Categories.AddRange(
                    new Category
                    {
                        CategoryName = "Đèn",
                        CreatedAt = GenerateRandomDate()
                    },
                    new Category
                    {
                        CategoryName = "Hoa",
                        CreatedAt = GenerateRandomDate()
                    },
                    new Category
                    {
                        CategoryName = "Túi",
                        CreatedAt = GenerateRandomDate()
                    },
                    new Category
                    {
                        CategoryName = "Phụ kiện",
                        CreatedAt = GenerateRandomDate()
                    }
                );
            }
        }

        private void SeedProducts()
        {
            if (!_context.Products.Any())
            {
                _context.Products.AddRange(
                    new Product
                    {
                        ProductName = "Spoon Lamp",
                        ProductDescription = "Đèn tái chế từ muỗng nhựa là biểu tượng của sự sáng tạo và bảo vệ môi trường. Với ánh sáng ấm áp, nó không chỉ làm đẹp không gian sống mà còn giúp giảm chất thải nhựa, tạo ra một phong cách sống thân thiện với thiên nhiên. Thiết kế độc đáo của Spoon Lamp không chỉ làm cho căn phòng trở nên ấm cúng mà còn là điểm nhấn thu hút mọi ánh nhìn. Đèn có thể điều chỉnh ánh sáng linh hoạt, phù hợp cho nhiều mục đích sử dụng trong gia đình và không gian làm việc.",
                        ProductPrice = 100000,
                        ProductQuantity = 100,
                        ProductImageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkheotay.com.vn%2Flam-do-handmade%2Fcach-lam-den-bang-thia-nhua-sieu-doc-dao&psig=AOvVaw1xq-3wbE5vwbLOj2X7BGpj&ust=1715356495412000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjPr4b3gIYDFQAAAAAdAAAAABAc",
                        CategoryId = _random.Next(1, (_context.Categories.Count() + 1)),
                        Status = true,
                        CreatedAt = GenerateRandomDate()
                    },
                    new Product
                    {
                        ProductName = "Tent Lamp",
                        ProductDescription = "Chiếc đèn lều không chỉ là nguồn ánh sáng mà còn là biểu tượng của ý thức bảo vệ môi trường. Thiết kế sáng tạo kết hợp với sự tái chế tạo nên một điểm nhấn ý nghĩa, tạo ra không gian sống đẹp và gần gũi. Ánh sáng êm dịu từ bên trong chiếc lều không chỉ tạo ra một không gian ánh sáng ấm cúng mà còn là một lời nhắc nhở về ý thức bảo vệ môi trường. Sự kết hợp giữa tính thẩm mỹ và mục đích tái chế làm cho chiếc đèn này trở thành một điểm nhấn độc đáo và ý nghĩa trong không gian sống của bất kỳ ai quan tâm đến việc bảo vệ môi trường.",
                        ProductPrice = 100000,
                        ProductQuantity = 100,
                        ProductImageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FLED-Camping-Lantern-Rechargeable-Lights%2Fdp%2FB0B9XQZXMX&psig=AOvVaw3UDXJy0h_e0Ns0zEwWkfKY&ust=1715357504673000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiZ2-f6gIYDFQAAAAAdAAAAABAJ",
                        CategoryId = _random.Next(1, (_context.Categories.Count() + 1)),
                        Status = true,
                        CreatedAt = GenerateRandomDate()
                    },
                    new Product
                    {
                        ProductName = "Lotus Pink",
                        ProductDescription = "Đèn Lotus Pink là sự kết hợp hoàn hảo giữa ý tưởng sáng tạo và bảo vệ môi trường. Từ những muỗng nhựa tái chế, nó mang đến không gian sống sáng tạo và thân thiện với thiên nhiên, làm cho mỗi góc nhà trở nên đẹp đẽ và ý nghĩa hơn. Ánh sáng dịu dàng phát ra từ Lotus Pink không chỉ tạo ra không gian thư giãn mà còn làm cho không gian sống trở nên tràn đầy sức sống và tươi mới. Thiết kế độc đáo và màu hồng nhẹ nhàng của đèn này sẽ làm cho bất kỳ không gian nào cũng trở nên ấn tượng và độc đáo hơn.",
                        ProductPrice = 120000,
                        ProductQuantity = 100,
                        ProductImageUrl = "https://i.pinimg.com/564x/73/a6/11/73a611ca3032cc8729c390c1c8adbdd1.jpg",
                        CategoryId = _random.Next(1, (_context.Categories.Count() + 1)),
                        Status = true,
                        CreatedAt = GenerateRandomDate()
                    },
                    new Product
                    {
                        ProductName = "Bow Hairpin",
                        ProductDescription = "Với Bow Hairpin, sự tái chế góp phần tạo nên không gian sống xanh và bền vững. Ánh sáng từ chiếc đèn này không chỉ làm đẹp mà còn là lời nhắc nhở về trách nhiệm bảo vệ môi trường, khiến mỗi ngôi nhà trở thành một nơi sống đẹp và ý nghĩa. Thiết kế sáng tạo và hiện đại của Bow Hairpin sẽ tạo ra một không gian sống độc đáo và ấn tượng, là nơi lý tưởng cho sự sáng tạo và thư giãn. Sự kết hợp giữa vẻ đẹp và ý nghĩa làm cho Bow Hairpin trở thành một lựa chọn hoàn hảo cho bất kỳ không gian nào.",
                        ProductPrice = 110000,
                        ProductQuantity = 100,
                        ProductImageUrl = "https://i.pinimg.com/564x/17/04/0c/17040cf9a53ffc26003639d851d00007.jpg",
                        CategoryId = _random.Next(1, (_context.Categories.Count() + 1)),
                        Status = true,
                        CreatedAt = GenerateRandomDate()
                    },
                    new Product
                    {
                        ProductName = "Peach Blossom",
                        ProductDescription = "Peach Blossom không chỉ là chiếc đèn mà còn là biểu tượng của sự sáng tạo và bảo vệ môi trường. Từ những muỗng nhựa tái chế, nó mang lại không gian sống độc đáo và thân thiện với thiên nhiên, tạo nên một môi trường sống bền vững và xanh sạch. Ánh sáng dịu dàng và màu sắc tươi mới của Peach Blossom sẽ làm cho mọi người cảm thấy thoải mái và thư giãn trong không gian sống của mình. Thiết kế độc đáo và ý nghĩa sẽ tạo ra một không gian sống đẹp và ý nghĩa hơn, đem lại cho bạn cảm giác hài lòng và hạnh phúc.",
                        ProductPrice = 9000,
                        ProductQuantity = 100,
                        ProductImageUrl = "https://i.pinimg.com/564x/15/89/b3/1589b3c19fb7cf3853c75f2ed092ff1d.jpg",
                        CategoryId = _random.Next(1, (_context.Categories.Count() + 1)),
                        Status = true,
                        CreatedAt = GenerateRandomDate()
                    },
                    new Product
                    {
                        ProductName = "Cloth Jean",
                        ProductDescription = "Cloth Jean là sự kết hợp tinh tế giữa sáng tạo và bảo vệ môi trường. Với nguồn ánh sáng ấm áp từ muỗng nhựa tái chế, nó không chỉ làm đẹp không gian sống mà còn lan tỏa thông điệp về sự chăm sóc và bảo vệ môi trường. Thiết kế độc đáo và hiện đại của Cloth Jean sẽ tạo ra một không gian sống độc đáo và ấn tượng, là nơi lý tưởng cho sự sáng tạo và thư giãn. Sự kết hợp giữa vẻ đẹp và ý nghĩa làm cho Cloth Jean trở thành một lựa chọn hoàn hảo cho bất kỳ không gian nào.",
                        ProductPrice = 80000,
                        ProductQuantity = 100,
                        ProductImageUrl = "https://i.pinimg.com/564x/11/89/45/1189456b0cc13d69d6f42e550c7c209e.jpg",
                        CategoryId = _random.Next(1, (_context.Categories.Count() + 1)),
                        Status = true,
                        CreatedAt = GenerateRandomDate()
                    },
                    new Product
                    {
                        ProductName = "Lotus Plas",
                        ProductDescription = "Lotus Plas là minh chứng cho sự sáng tạo và bảo vệ môi trường. Từ những muỗng nhựa tái chế, nó tạo ra ánh sáng độc đáo và thân thiện với thiên nhiên, làm cho mỗi không gian sống trở nên đẹp và ý nghĩa hơn. Thiết kế độc đáo và màu sắc tươi mới của Lotus Plas sẽ tạo ra một không gian sống độc đáo và ấn tượng, là nơi lý tưởng cho sự sáng tạo và thư giãn. Sự kết hợp giữa vẻ đẹp và ý nghĩa làm cho Lotus Plas trở thành một lựa chọn hoàn hảo cho bất kỳ không gian nào.",
                        ProductPrice = 6000,
                        ProductQuantity = 100,
                        ProductImageUrl = "https://i.pinimg.com/564x/68/82/26/6882261694cb0eb7b6736dbcfa444b13.jpg",
                        CategoryId = _random.Next(1, (_context.Categories.Count() + 1)),
                        Status = true,
                        CreatedAt = GenerateRandomDate()
                    }
                );
            }
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
                        PhoneNumber = GenerateRandomPhoneNumber(), // Cung cấp số điện thoại ngẫu nhiên
                        Status = (_random.Next(1, 6) == 1) ? false : true
                    };
                    _context.Users.Add(user);
                }

            }
        }
        private void SeedCoupons(int count)
        {
            if (!_context.Coupons.Any())
            {
                for (int i = 0; i < count; i++)
                {
                    var createdAt = GenerateRandomDate();
                    var expiryDate = GenerateRandomDate();

                    // Ensure createdAt is before expiryDate
                    while (createdAt >= expiryDate)
                    {
                        createdAt = GenerateRandomDate();
                        expiryDate = GenerateRandomDate();
                    }
                    var coupon = new Coupon
                    {
                        CouponCode = GenerateRandomString(10),
                        DiscountType = (_random.Next(2) == 0) ? "Discount for product" : "Coupon for bill",
                        DiscountValue = _random.Next(1, 101),
                        ExpiryDate = expiryDate,
                        ActiveStatus = true,
                        CreatedAt = createdAt
                    };
                    _context.Coupons.Add(coupon);
                }
            }
        }

        private void SeedCouponProduct()
        {
            if (!_context.CouponProducts.Any())
            {
                var couponsForProduct = _context.Coupons
                    .Where(coupon => coupon.DiscountType.Equals("Discount for product") == true)
                    .ToList();
                foreach (var item in couponsForProduct)
                {
                    var newProductCoupon = new CouponProduct
                    {
                        CouponId = item.CouponId,
                        ProductId = _random.Next(1, (_context.Products.Count() + 1))
                    };
                    _context.CouponProducts.Add(newProductCoupon);
                }
            }
        }

        private void SeedFavoriteProduct(int count)
        {
            if (!_context.FavoriteProducts.Any())
            {
                for (int i = 0; i < count; i++)
                {
                    var favoriteProduct = new FavoriteProduct
                    {
                        UserId = _random.Next(1, (_context.Users.Count() + 1)),
                        ProductId = _random.Next(1, (_context.Products.Count() + 1)),
                        DateAdded = GenerateRandomDate()
                    };
                    _context.FavoriteProducts.Add(favoriteProduct);
                }
            }
        }

        private void SeedComment()
        {
            var users = _context.Users.ToList();
            var products = _context.Products.ToList();

            foreach (var user in users)
            {
                // Generate a random number of products for this user to comment on (between 1 and 7)
                var numProductsToComment = _random.Next(1, 8);

                // Shuffle the products list to ensure randomness in selection
                products = products.OrderBy(p => Guid.NewGuid()).ToList();

                // Select the first 'numProductsToComment' products for this user to comment on
                var productsToComment = products.Take(numProductsToComment).ToList();

                foreach (var product in productsToComment)
                {
                    var comment = new Comment
                    {
                        UserId = user.UserId,
                        ProductId = product.ProductId,
                        CommentText = GenerateRandomString(50),
                        CommentDate = GenerateRandomDate()
                    };
                    _context.Comments.Add(comment);
                }
            }
        }


        private void SeedOrder(int count)
        {
            if (!_context.Orders.Any())
            {
                string[] orderStatuses = { "Chờ xác nhận", "Chờ lấy hàng", "Chờ giao hàng", "Đã thanh toán" };

                for (int i = 0; i < count; i++)
                {
                    var order = new Order
                    {
                        UserId = _random.Next(1, (_context.Users.Count() + 1)),
                        OrderDate = GenerateRandomDate(),
                        TotalAmount = GenerateRandomAmount(),
                        OrderStatus = orderStatuses[_random.Next(orderStatuses.Length)], // Chọn ngẫu nhiên một trong số các trạng thái
                        Note = GenerateRandomNote(), // Tạo ghi chú ngẫu nhiên hoặc rỗng
                        CreatedAt = GenerateRandomDate()
                    };
                    _context.Orders.Add(order);
                }
            }
        }

        private void SeedOrderDetail()
        {
            if (!_context.OrderDetails.Any())
            {
                var orders = _context.Orders.ToList();

                foreach (var order in orders)
                {
                    var usedProductIds = new HashSet<int>(); // Keep track of used ProductIds for this order

                    var numProducts = _random.Next(1, (_context.Products.Count() + 1));

                    for (int i = 0; i < numProducts; i++)
                    {
                        int productId;
                        do
                        {
                            productId = _random.Next(1, (_context.Products.Count() + 1));
                        } while (usedProductIds.Contains(productId)); // Check if the productId has already been used for this order

                        usedProductIds.Add(productId); // Add the productId to the usedProductIds set

                        var orderDetail = new OrderDetail
                        {
                            OrderId = order.OrderId,
                            ProductId = productId,
                            Quantity = _random.Next(1, 6),
                            UnitPrice = GenerateRandomAmount()
                        };
                        _context.OrderDetails.Add(orderDetail);
                    }
                }
            }
        }



        private void SeedRating()
        {
            if (!_context.Ratings.Any())
            {
                var users = _context.Comments.ToList();

                foreach (var item in users)
                {
                    var rating = new Rating
                    {
                        UserId = item.UserId,
                        ProductId = item.ProductId,
                        RatingValue = _random.Next(1, 6),
                        RatingDate = GenerateRandomDate()
                    };
                    _context.Ratings.Add(rating);
                }
            }
        }

        private string GenerateRandomNote()
        {
            // Một số ngẫu nhiên từ 1 đến 5, chỉ có khi số này là 1 thì trả về ghi chú ngẫu nhiên, ngược lại trả về ghi chú rỗng
            if (_random.Next(1, 6) == 1)
            {
                return "N/A"; // Ghi chú rỗng
            }
            else
            {
                return GenerateRandomString(20);

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
        private decimal GenerateRandomAmount()
        {
            // Tạo giá trị ngẫu nhiên từ 1000 đến 1000000
            return (decimal)(_random.Next(1000, 1000000));
        }


        public static DateTime GenerateRandomDate()
        {
            Random random = new Random();
            int year = DateTime.Now.Year;
            int month = random.Next(1, 13);
            int daysInMonth = DateTime.DaysInMonth(year, month);
            int day = random.Next(1, daysInMonth + 1);
            DateTime randomDate = new DateTime(year, month, day);
            return randomDate;
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
    

