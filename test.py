import openai

openai.api_key = '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'

# 提问
prompt = '你是谁？'

# 访问OpenAI接口
response = openai.ChatCompletion.create(
    model='gpt-3.5-turbo',
    messages=[
        {"role": "system", "content": "你是潘高的私人智能助手。"},
        {"role": "user", "content": "谁赢得了2020年的世界职业棒球大赛?"},
        {"role": "assistant", "content": "洛杉矶道奇队在2020年赢得了世界职业棒球大赛冠军。"},
        {"role": "user", "content": "谁贡献了全场最佳表现？"},
        {"role": "assistant", "content": "在2020年世界职业棒球大赛中，洛杉矶道奇队的科迪·贝尔卢（Cody Bellinger）被授予了全场最佳表现奖，他在比赛中打出了关键的本垒打"},
        {"role": "user", "content": "他最适合与辐射4中哪个角色组成搭档？"},
    ],
    stream = True
)

for chunk in response:
    # 返回信息
    res = chunk.choices[0].delta
    for key, value in res.items():
        if key == 'content':
            print(value)