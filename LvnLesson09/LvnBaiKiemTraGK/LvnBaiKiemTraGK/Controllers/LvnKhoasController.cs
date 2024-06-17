using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using LvnBaiKiemTraGK.Models;

namespace LvnBaiKiemTraGK.Controllers
{
    public class LvnKhoasController : Controller
    {
        private LvnK22CNT1Lesson07DbEntities db = new LvnK22CNT1Lesson07DbEntities();

        // GET: LvnKhoas
        public ActionResult LvnIndex()
        {
            return View(db.lvnKhoa.ToList());
        }

        // GET: LvnKhoas/Details/5
        public ActionResult LvnDetails(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            lvnKhoa lvnKhoa = db.lvnKhoa.Find(id);
            if (lvnKhoa == null)
            {
                return HttpNotFound();
            }
            return View(lvnKhoa);
        }

        // GET: LvnKhoas/Create
        public ActionResult LvnCreate()
        {
            return View();
        }

        // POST: LvnKhoas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult  LvnCreate([Bind(Include = "LvnMaKH,LvnTenKH,Lvn_Trang_Thai")] lvnKhoa lvnKhoa)
        {
            if (ModelState.IsValid)
            {
                db.lvnKhoa.Add(lvnKhoa);
                db.SaveChanges();
                return RedirectToAction("LvnIndex");
            }

            return View(lvnKhoa);
        }

        // GET: LvnKhoas/Edit/5
        public ActionResult LvnEdit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            lvnKhoa lvnKhoa = db.lvnKhoa.Find(id);
            if (lvnKhoa == null)
            {
                return HttpNotFound();
            }
            return View(lvnKhoa);
        }

        // POST: LvnKhoas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LvnEdit([Bind(Include = "LvnMaKH,LvnTenKH,Lvn_Trang_Thai")] lvnKhoa lvnKhoa)
        {
            if (ModelState.IsValid)
            {
                db.Entry(lvnKhoa).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("LvnIndex");
            }
            return View(lvnKhoa);
        }

        // GET: LvnKhoas/Delete/5
        public ActionResult LvnDelete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            lvnKhoa lvnKhoa = db.lvnKhoa.Find(id);
            if (lvnKhoa == null)
            {
                return HttpNotFound();
            }
            return View(lvnKhoa);
        }

        // POST: LvnKhoas/Delete/5
        [HttpPost, ActionName("LvnDelete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            lvnKhoa lvnKhoa = db.lvnKhoa.Find(id);
            db.lvnKhoa.Remove(lvnKhoa);
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
