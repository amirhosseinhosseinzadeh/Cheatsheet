use master


-- check db logical names

restore FILELISTONLY
from disk = 'file_path'


restore database [NewDbName]
from disk = 'file_path'
with 
	move 'db_logical_name' to 'destination_mdf',
	move 'db_logical_log_name' to 'destination_ldf',
Replace;
