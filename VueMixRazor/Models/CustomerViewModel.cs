using System.ComponentModel.DataAnnotations;

namespace VueMixRazor.Models
{
    public class CustomerViewModel
    {
        // public int CustomerId { get; set; }

        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]

        public string LastName { get; set; }
        
        [Display(Name = "Year of Birth")]
        public int BirthYear { get; set; }

        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}