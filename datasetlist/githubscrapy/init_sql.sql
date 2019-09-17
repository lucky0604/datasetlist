create table if not exists github (
	id int auto_increment primary key COMMENT="id",
	project_name varchar(255) not null COMMENT="项目名称",
	category varchar(100) COMMENT="类型，语言",
	desc_info text COMMENT="项目描述",
	license_desc varchar(100) COMMENT="项目执照",
	stars varchar(100) COMMENT="热度",
	contributor_user varchar(100) COMMENT="项目所有者",
	project_year varchar(100) COMMENT="项目开始日期",
	created_at date COMMENT="数据更新时间"
) engine = innoDB;