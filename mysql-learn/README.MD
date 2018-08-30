## 常用sql

```mysql
# 查重
select * from repositories   
where github_id in (select github_id from repositories group by github_id having count(github_id) > 1);

# 删除重读
delete from repositories where 
github_id in (select github_id from ( select github_id from repositories group by github_id having count(github_id)>1) a) 
and id not in ( select min(id) from (select min(id) as id from repositories group by github_id having count(github_id)>1 ) b)

```
