-- 코드를 입력하세요
--  1.각 상품의 매출액을 계산 2. 매출액을 내림차순으로 정렬 3. 매출액이 같은 경우에는 상품코드를 오름차순으로 정렬해 결과 출력
SELECT
  p.PRODUCT_CODE,
  SUM(p.PRICE * o.SALES_AMOUNT) AS SALES
FROM
  PRODUCT p
JOIN
  OFFLINE_SALE o ON p.PRODUCT_ID = o.PRODUCT_ID
GROUP BY
  p.PRODUCT_CODE
ORDER BY
  SALES DESC, p.PRODUCT_CODE;
