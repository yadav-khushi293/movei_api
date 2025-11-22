import{ apiCall }from'./api';
  describe('apiCall',()=>{
  beforeEach(()=>{
    global.fetch=jest.fn();
  });
  test('should return data when fetch is successful',async()=>{
    const mockData={Message:'Hello world'};
  
    global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
    });
    const result = await apiCall('https://fakestoreapi.com/products');
    console.log(result);
    expect (result).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
  });

  test('should handle fetch error',async()=>{
    const consoleSpy = jest.spyOn(console,'log').mockImplementation(()=>{ });

    global.fetch.mockRejectedValue(new Error('Network error'));

    const result = await apiCall('https://fakestoreapi.com/products');
    console.log(result);
    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalledWith(new Error('Network error'));

    consoleSpy.mockRestore();
  });
});