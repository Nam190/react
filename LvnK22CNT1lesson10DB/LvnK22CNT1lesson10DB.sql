USE [LvnK22CNT1Lesson10Db]
GO
/****** Object:  Table [dbo].[KetQua]    Script Date: 24/06/2024 9:57:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KetQua](
	[MaSV] [nchar](10) NOT NULL,
	[MaMH] [nchar](10) NOT NULL,
	[Diem] [nchar](10) NULL,
 CONSTRAINT [PK_KetQua] PRIMARY KEY CLUSTERED 
(
	[MaSV] ASC,
	[MaMH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Khoa]    Script Date: 24/06/2024 9:57:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Khoa](
	[MaKH] [nchar](10) NOT NULL,
	[TenKH] [nvarchar](50) NULL,
 CONSTRAINT [PK_Khoa] PRIMARY KEY CLUSTERED 
(
	[MaKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MonHoc]    Script Date: 24/06/2024 9:57:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MonHoc](
	[MaMH] [nchar](10) NOT NULL,
	[TenMH] [nvarchar](50) NULL,
	[Sotiet] [nchar](10) NULL,
 CONSTRAINT [PK_MonHoc] PRIMARY KEY CLUSTERED 
(
	[MaMH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SinhVien]    Script Date: 24/06/2024 9:57:59 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SinhVien](
	[MaSV] [nchar](10) NOT NULL,
	[HoSV] [nvarchar](50) NULL,
	[TenSV] [nvarchar](50) NULL,
	[Phai] [nchar](10) NULL,
	[NgaySinh] [datetime] NULL,
	[NoiSinh] [nvarchar](50) NULL,
	[MaKH] [nchar](10) NULL,
	[HocBong] [nvarchar](50) NULL,
	[DiemTrungBinh] [int] NULL,
 CONSTRAINT [PK_SinhVien] PRIMARY KEY CLUSTERED 
(
	[MaSV] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[KetQua] ([MaSV], [MaMH], [Diem]) VALUES (N'01        ', N'10        ', N'10        ')
INSERT [dbo].[KetQua] ([MaSV], [MaMH], [Diem]) VALUES (N'02        ', N'20        ', N'9         ')
GO
INSERT [dbo].[Khoa] ([MaKH], [TenKH]) VALUES (N'001       ', N'Công nghệ thông tin')
INSERT [dbo].[Khoa] ([MaKH], [TenKH]) VALUES (N'002       ', N'Quản trị kinh doanh')
GO
INSERT [dbo].[MonHoc] ([MaMH], [TenMH], [Sotiet]) VALUES (N'10        ', N'Lập Trình web', N'10        ')
INSERT [dbo].[MonHoc] ([MaMH], [TenMH], [Sotiet]) VALUES (N'20        ', N'Quản Trị Kinh Doanh', N'20        ')
GO
INSERT [dbo].[SinhVien] ([MaSV], [HoSV], [TenSV], [Phai], [NgaySinh], [NoiSinh], [MaKH], [HocBong], [DiemTrungBinh]) VALUES (N'01        ', N'Lưu Viết', N'Nam', N'true      ', CAST(N'2002-10-10T00:00:00.000' AS DateTime), N'Hà Nội', N'001       ', N'toàn phần', 9)
INSERT [dbo].[SinhVien] ([MaSV], [HoSV], [TenSV], [Phai], [NgaySinh], [NoiSinh], [MaKH], [HocBong], [DiemTrungBinh]) VALUES (N'02        ', N'Nguyễn ', N'Trung Anh', N'true      ', CAST(N'2002-10-20T00:00:00.000' AS DateTime), N'Hà Nội', N'002       ', N'toàn phần', 8)
GO
