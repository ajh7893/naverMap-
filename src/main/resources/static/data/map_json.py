import json
import pandas as pd

# JSON 파일 로드
file_path = "map_json.json"  # 파일명을 맞게 변경하세요
with open(file_path) as file:
    data = json.load(file)

# 위경도 좌표 추출
polylinePath = []
for segment in data:
    coords = segment["path"].split(" ")
    for coord in coords:
        lon, lat = map(float, coord.split(","))
        polylinePath.append({"lat": lat, "lon": lon})

# DataFrame 변환
df = pd.DataFrame(polylinePath)

# 5개 행만 출력
print(df.head())

# CSV 파일로 저장 (옵션)
df.to_csv("polyline_output.csv", index=False, encoding="utf-8")
print("CSV 파일 저장 완료: polyline_output.csv")
