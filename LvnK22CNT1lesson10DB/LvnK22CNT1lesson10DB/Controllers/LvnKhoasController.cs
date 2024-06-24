using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using LvnK22CNT1lesson10DB.Models;

namespace LvnK22CNT1lesson10DB.Controllers
{
    public class LvnKhoasController : Controller
    {
        private LvnK22CNT1Lesson10DbEntities db = new LvnK22CNT1Lesson10DbEntities();

        // GET: Khoas
        public ActionResult LvnIndex()
        {
            return View(db.Khoa.ToList());
        }

        // GET: Khoas/Details/5
        public ActionResult LvnDetails(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Khoa khoa = db.Khoa.Find(id);
            if (khoa == null)
            {
                return HttpNotFound();
            }
            return View(khoa);
        }

        // GET: Khoas/Create
        public ActionResult LvnCreate()
        {
            return View();
        }

        // POST: Khoas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LvnCreate([Bind(Include = "MaKH,TenKH")] Khoa khoa)
        {
            if (ModelState.IsValid)
            {
                db.Khoa.Add(khoa);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(khoa);
        }

        // GET: Khoas/Edit/5
        public ActionResult LvnEdit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Khoa khoa = db.Khoa.Find(id);
            if (khoa == null)
            {
                return HttpNotFound();
            }
            return View(khoa);
        }

        // POST: Khoas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LvnEdit([Bind(Include = "MaKH,TenKH")] Khoa khoa)
        {
            if (ModelState.IsValid)
            {
                db.Entry(khoa).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("LvnIndex");
            }
            return View(khoa);
        }

        // GET: Khoas/Delete/5
        public ActionResult LvnDelete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Khoa khoa = db.Khoa.Find(id);
            if (khoa == null)
            {
                return HttpNotFound();
            }
            return View(khoa);
        }

        // POST: Khoas/Delete/5
        [HttpPost, ActionName("LvnDelete")]
        [ValidateAntiForgeryToken]
        public ActionResult LvnDeleteConfirmed(string id)
        {
            Khoa khoa = db.Khoa.Find(id);
            db.Khoa.Remove(khoa);
            db.SaveChanges();
            return RedirectToAction("LvnIndex");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
