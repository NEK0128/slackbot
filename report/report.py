import requests
import json


def lambda_handler(event, context):
    requests.post('**', data = json.dumps({
        'text': u'@kmatsuda Test', # 投稿するテキスト
        'username': u'クローラーレポーティング', # 投稿のユーザー名
        'icon_emoji': u':ghost:', # 投稿のプロフィール画像に入れる絵文字
        'link_names': 1, # メンションを有効にする
    }))
    
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
