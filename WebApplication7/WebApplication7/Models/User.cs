using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication7.Models
{
    public class User
    {
        private int userId;
        private string name;
        private string surname;
        private string password;
        private string email;


        [Key]
        public int UserId { get => userId; set => userId = value; }
        [Required]
        public string Name { get => name; set => name = value; }
        [Required]
        public string Surname { get => surname; set => surname = value; }
        [Required]
        public string Password { get => password; set => password = value; }
        [Required]
        public string Email { get => email; set => email = value; }
    }
}
