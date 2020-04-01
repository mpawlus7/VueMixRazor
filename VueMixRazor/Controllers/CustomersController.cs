using Microsoft.AspNetCore.Mvc;
using VueMixRazor.Models;

namespace VueMixRazor.Controllers
{
    public class CustomersController : Controller
    {
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(CustomerViewModel viewModel)
        {
            //your backend logic here ...
            if (ModelState.IsValid)
            {
                return RedirectToAction("Index", "Home");
            }

            return View();
        }
    }
}