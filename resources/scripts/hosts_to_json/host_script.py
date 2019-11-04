import pandas as pd

# Reads Excel file called 'hosts.xlsx'
df = pd.read_excel('hosts.xlsx', encoding='utf-8')

# Takes the two columns 'Name' and 'Position', and drops the first row containg 
# example person
df = df[['Name', 'Position']].drop(df.index[0])

# Changes column names and makes them lower case
df.rename(columns={'Position':'role', 'Name':'name'}, inplace=True)

# Adds ID column
df['id'] = range(len(df))

# Add default picture
df['image'] = "require('../../resources/img/arkadTeam/default.png')"

# Saves datafarme to 'parsed_hosts.json'
df.to_json(r'parsed_hosts.json', orient='records', force_ascii=False)