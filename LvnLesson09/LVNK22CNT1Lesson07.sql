USE [LvnK22CNT1Lesson07Db]
GO
/****** Object:  Table [dbo].[lvnKhoa]    Script Date: 17/06/2024 8:48:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lvnKhoa](
	[LvnMaKH] [nchar](10) NOT NULL,
	[LvnTenKH] [nvarchar](50) NULL,
	[Lvn Trang Thai] [bit] NULL,
 CONSTRAINT [PK_lvnKhoa] PRIMARY KEY CLUSTERED 
(
	[LvnMaKH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lvnSinhVien]    Script Date: 17/06/2024 8:48:25 SA ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lvnSinhVien](
	[LvnMaSV] [nvarchar](50) NOT NULL,
	[LvnHoSV] [nvarchar](50) NULL,
	[LvnTenSV] [nvarchar](50) NULL,
	[LvnNgaySinh] [date] NULL,
	[LvnPhai] [bit] NULL,
	[LvnPhone] [nchar](10) NULL,
	[LvnEmail] [nvarchar](50) NULL,
	[LvnMaKH] [nchar](10) NULL,
 CONSTRAINT [PK_lvnSinhVien] PRIMARY KEY CLUSTERED 
(
	[LvnMaSV] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[lvnKhoa] ([LvnMaKH], [LvnTenKH], [Lvn Trang Thai]) VALUES (N'K22CNT1   ', N'K22CNT2', 1)
GO
INSERT [dbo].[lvnSinhVien] ([LvnMaSV], [LvnHoSV], [LvnTenSV], [LvnNgaySinh], [LvnPhai], [LvnPhone], [LvnEmail], [LvnMaKH]) VALUES (N'220001234', N'Lưu Viết', N'Nam', CAST(N'2002-10-10' AS Date), 1, N'032165979 ', N'luunam990@gmail.com', N'K22CNT1   ')
GO
